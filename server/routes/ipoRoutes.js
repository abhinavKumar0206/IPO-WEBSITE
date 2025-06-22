const express = require('express');
const router = express.Router();
const pool = require('../models/db');

// GET all IPOs
router.get('/ipos', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        ipos.ipo_id,
        companies.company_name,
        ipos.price_band,
        ipos.open_date,
        ipos.close_date,
        ipos.issue_size,
        ipos.issue_type,
        ipos.listing_date,
        ipos.status
      FROM ipos
      JOIN companies ON ipos.company_id = companies.company_id
      ORDER BY ipos.open_date DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching IPOs:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET a single IPO
router.get('/ipo/:id', async (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid IPO ID" });
  }

  try {
    const result = await pool.query(`
      SELECT ipos.*, companies.company_name, companies.company_logo
      FROM ipos
      JOIN companies ON ipos.company_id = companies.company_id
      WHERE ipo_id = $1
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "IPO not found" });
    }

    const docs = await pool.query(`SELECT * FROM documents WHERE ipo_id = $1`, [id]);
    const ipo = result.rows[0];
    ipo.documents = docs.rows;

    res.json(ipo);
  } catch (err) {
    console.error('Error fetching IPO:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /register - Register new IPO
// POST /api/ipo/register
router.post('/register', async (req, res) => {
  try {
    const {
      company_name,
      price_band,
      open_date,
      close_date,
      issue_size,
      issue_type,
      listing_date,
      status,
      ipo_price,
      listing_price,
      listing_gain,
      current_market_price,
      current_return,
    } = req.body;

    // Step 1: Check if company exists
    let companyResult = await pool.query(
      `SELECT company_id FROM companies WHERE company_name = $1`,
      [company_name]
    );

    let company_id;

    if (companyResult.rows.length > 0) {
      company_id = companyResult.rows[0].company_id;
    } else {
      // Step 2: Insert new company
      const insertResult = await pool.query(
        `INSERT INTO companies (company_name, company_logo) VALUES ($1, $2) RETURNING company_id`,
        [company_name, '🏢'] // default logo
      );
      company_id = insertResult.rows[0].company_id;
    }

    // Step 3: Register the IPO
    const result = await pool.query(
      `INSERT INTO ipos (
        company_id, price_band, open_date, close_date, issue_size,
        issue_type, listing_date, status, ipo_price, listing_price,
        listing_gain, current_market_price, current_return
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
      RETURNING *`,
      [
        company_id, price_band, open_date, close_date, issue_size,
        issue_type, listing_date, status, ipo_price, listing_price,
        listing_gain, current_market_price, current_return
      ]
    );

    res.status(201).json({ success: true, ipo: result.rows[0] });
  } catch (err) {
    console.error('Error registering IPO:', err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});
// DELETE /api/ipo/:id
router.delete('/ipo/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // First, find the IPO to get its company_id
    const ipoRes = await pool.query('SELECT company_id FROM ipos WHERE ipo_id = $1', [id]);
    if (ipoRes.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'IPO not found' });
    }

    const companyId = ipoRes.rows[0].company_id;

    // Delete any related documents
    await pool.query('DELETE FROM documents WHERE ipo_id = $1', [id]);

    // Delete the IPO
    await pool.query('DELETE FROM ipos WHERE ipo_id = $1', [id]);

    // Check if the company is used by any other IPO
    const checkCompany = await pool.query(
      'SELECT * FROM ipos WHERE company_id = $1',
      [companyId]
    );

    // If not used anywhere else, delete the company
    if (checkCompany.rowCount === 0) {
      await pool.query('DELETE FROM companies WHERE company_id = $1', [companyId]);
    }

    res.json({ success: true, message: 'IPO and associated company (if unused) deleted successfully' });
  } catch (err) {
    console.error('Error deleting IPO and company:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


//     // 3. Insert IPO
//     const result = await pool.query(
//       `INSERT INTO ipos (
//         company_id, price_band, open_date, close_date, issue_size,
//         issue_type, listing_date, status, ipo_price, listing_price,
//         listing_gain, current_market_price, current_return
//       ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
//       RETURNING *`,
//       [
//         company_id, price_band, open_date, close_date, issue_size,
//         issue_type, listing_date, status, ipo_price, listing_price,
//         listing_gain, current_market_price, current_return
//       ]
//     );

//     res.status(201).json({ success: true, ipo: result.rows[0] });

//   } catch (err) {
//     console.error('Error registering IPO:', err);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// });
// GET /api/companies/name/:name - get company_id by company_name
router.get('/companies/name/:name', async (req, res) => {
  const { name } = req.params;

  try {
    const result = await pool.query(
      'SELECT company_id FROM companies WHERE company_name = $1',
      [name]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Company not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching company by name:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// // DELETE /api/ipo/:id
// router.delete('/ipo/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     await pool.query('DELETE FROM ipos WHERE ipo_id = $1', [id]);
//     res.json({ success: true, message: 'IPO deleted successfully' });
//   } catch (err) {
//     console.error('Error deleting IPO:', err);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// });



module.exports = router;
