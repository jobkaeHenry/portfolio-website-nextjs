import type { NextPage } from "next";
import { useState } from "react";

import Layout from "../components/Layout";
import HeroSection from "./../components/HeroSection";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
};

export default Home;
