--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: companies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.companies (
    company_id integer NOT NULL,
    company_name character varying(255) NOT NULL,
    company_logo character varying(255)
);


ALTER TABLE public.companies OWNER TO postgres;

--
-- Name: companies_company_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.companies_company_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.companies_company_id_seq OWNER TO postgres;

--
-- Name: companies_company_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.companies_company_id_seq OWNED BY public.companies.company_id;


--
-- Name: documents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.documents (
    document_id integer NOT NULL,
    ipo_id integer,
    rhp_pdf character varying(255),
    drhp_pdf character varying(255)
);


ALTER TABLE public.documents OWNER TO postgres;

--
-- Name: documents_document_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.documents_document_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.documents_document_id_seq OWNER TO postgres;

--
-- Name: documents_document_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.documents_document_id_seq OWNED BY public.documents.document_id;


--
-- Name: ipos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ipos (
    ipo_id integer NOT NULL,
    company_id integer,
    price_band character varying(50),
    open_date date,
    close_date date,
    issue_size character varying(100),
    issue_type character varying(50),
    listing_date date,
    status character varying(20),
    ipo_price numeric(10,2),
    listing_price numeric(10,2),
    listing_gain numeric(5,2),
    current_market_price numeric(10,2),
    current_return numeric(5,2)
);


ALTER TABLE public.ipos OWNER TO postgres;

--
-- Name: ipos_ipo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ipos_ipo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ipos_ipo_id_seq OWNER TO postgres;

--
-- Name: ipos_ipo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ipos_ipo_id_seq OWNED BY public.ipos.ipo_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    name character varying(100),
    email character varying(100) NOT NULL,
    password text NOT NULL,
    role character varying(20) DEFAULT 'user'::character varying,
    CONSTRAINT users_role_check CHECK (((role)::text = ANY ((ARRAY['admin'::character varying, 'user'::character varying])::text[])))
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_user_id_seq OWNER TO postgres;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: companies company_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies ALTER COLUMN company_id SET DEFAULT nextval('public.companies_company_id_seq'::regclass);


--
-- Name: documents document_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documents ALTER COLUMN document_id SET DEFAULT nextval('public.documents_document_id_seq'::regclass);


--
-- Name: ipos ipo_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ipos ALTER COLUMN ipo_id SET DEFAULT nextval('public.ipos_ipo_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: companies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.companies (company_id, company_name, company_logo) FROM stdin;
1	TechNova Pvt Ltd	https://example.com/logo-technova.png
2	GreenCore Industries	https://example.com/logo-greencore.png
3	FinSight Analytics	https://example.com/logo-finsight.png
\.


--
-- Data for Name: documents; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.documents (document_id, ipo_id, rhp_pdf, drhp_pdf) FROM stdin;
2	2	https://example.com/docs/technova2-rhp.pdf	https://example.com/docs/technova2-drhp.pdf
3	3	https://example.com/docs/greencore-rhp.pdf	https://example.com/docs/greencore-drhp.pdf
4	4	https://example.com/docs/finsight-rhp.pdf	https://example.com/docs/finsight-drhp.pdf
\.


--
-- Data for Name: ipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ipos (ipo_id, company_id, price_band, open_date, close_date, issue_size, issue_type, listing_date, status, ipo_price, listing_price, listing_gain, current_market_price, current_return) FROM stdin;
2	1	?700-?750	2025-01-10	2025-01-14	?150 Cr	Fixed Price	2025-01-25	Listed	740.00	730.00	-1.35	710.00	-4.05
3	2	?300-?320	2024-08-01	2024-08-04	?80 Cr	Book Built	2024-08-15	Listed	310.00	320.00	3.22	350.00	12.90
4	3	?200-?230	2024-09-10	2024-09-15	?60 Cr	Book Built	2024-09-28	Listed	225.00	210.00	-6.67	220.00	-2.22
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, name, email, password, role) FROM stdin;
4	Abhinav Kumar	ab1419141@gmail.com	$2b$10$aseLf63PERxkUYePmrt84u1rTxlfdGkQ6LCwjr.1msiHWD3U3NBJy	user
1	Vishal	admin@bluestock.com	$2b$10$XafqrKphj.c6MEiQpO/GY.zq9/KegJcGyUiYwkuLlORhR5aA2p.La	admin
5	Bhabya Singh	bhabyasingh2008@gmail.com	$2b$10$3RUysCsz50oXch9f56Vrz.J0ewJIlOUHXfpG7IWoZwbWbzdWrquzq	user
\.


--
-- Name: companies_company_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.companies_company_id_seq', 9, true);


--
-- Name: documents_document_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.documents_document_id_seq', 4, true);


--
-- Name: ipos_ipo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ipos_ipo_id_seq', 8, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 5, true);


--
-- Name: companies companies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (company_id);


--
-- Name: documents documents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (document_id);


--
-- Name: ipos ipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ipos
    ADD CONSTRAINT ipos_pkey PRIMARY KEY (ipo_id);


--
-- Name: companies unique_company_name; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT unique_company_name UNIQUE (company_name);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: documents documents_ipo_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_ipo_id_fkey FOREIGN KEY (ipo_id) REFERENCES public.ipos(ipo_id) ON DELETE CASCADE;


--
-- Name: ipos ipos_company_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ipos
    ADD CONSTRAINT ipos_company_id_fkey FOREIGN KEY (company_id) REFERENCES public.companies(company_id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

