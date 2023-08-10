import type { NextPage } from "next";
import React from "react";
import Link from "next/link";
import withRoot from "../modules/withRoot";
import Layout from "../layout/Layout";
import { 
  BanerSlider,
  PartnersSlider,
} from "../components";
import {
  ProductHowItWorks,
  ApplicationForm,
  Attention,
  ProductValues,
} from "../modules/views";
import styles from "./index.module.scss";

const Home: NextPage = () => {
   
	return (
    <Layout
        title='Главная &nbsp;— РуНетСофт'
        desc='Разработка ПО (программного обеспечения) на заказ'
        ogTitle='Главная &nbsp;— РуНетСофт'
        >
          <BanerSlider />
          <ProductHowItWorks />
          <section className={styles.ourPartners}>
            <h2 className={styles.ourPartners__title}>
              Наши партнеры
            </h2>
            <PartnersSlider />
          </section>
          <ProductValues />
          <ApplicationForm />  
          <Attention /> 
    </Layout>
	)
}

export default withRoot(Home);