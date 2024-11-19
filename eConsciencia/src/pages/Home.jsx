// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction';
import CarouselSection from '../components/CarouselSection';
import CO2 from "/CO2.png";
import { Link } from "react-router-dom";
import contaminacionAgua from "/contaminacionAgua.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow overflow-y-auto"> 
        <Introduction />
        <CarouselSection />
      {/* Contenedor de las tarjetas en una fila */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-4 px-4">

         {/* Card para escasez de agua */}
         <Link to="/Shortage" className="w-full md:w-1/2 lg:w-1/4">
          <Card className="shadow-lg lg:max-w-sm p-4">
            <CardHeader className="pb-2">
              <CardTitle>Introduction</CardTitle>
              <CardDescription>Water Shortage</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={"Freshwater-shortages.jpg"} alt="water contamination" className="w-full h-36 object-cover" />
            </CardContent>
            <CardFooter className="pt-2">
              <p className="text-sm">
              Water scarcity is one of the most urgent environmental challenges the world faces today. Millions of people worldwide lack access to clean and safe drinking water due to droughts, over-extraction, and contamination of water sources. This crisis not only impacts human health but also hampers agriculture, industry, and ecosystems. As the demand for water increases, it becomes critical to manage this precious resource wisely. It's vital that we address these issues to ensure a sustainable water future for all. Visit our website to help raise awareness and take action on this critical issue.
              </p>
            </CardFooter>
          </Card>
        </Link>
        
        {/* Card para Contaminación del agua */}
        <Link to="/contamination" className="w-full md:w-1/2 lg:w-1/4">
          <Card className="shadow-lg lg:max-w-sm p-4">
            <CardHeader className="pb-2">
              <CardTitle>Introduction</CardTitle>
              <CardDescription>Water Contamination</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={contaminacionAgua} alt="water contamination" className="w-full h-36 object-cover" />
            </CardContent>
            <CardFooter className="pt-2">
              <p className="text-sm">
              Water pollution is one of the most critical environmental problems facing the world today. Sewage, industrial chemicals, plastics, and agricultural waste are being dumped into rivers, lakes, and oceans. This not only affects aquatic life but also poses serious risks to human health. The contaminants disrupt ecosystems and threaten the supply of drinking water for millions of people. It's essential to address these issues to protect both the environment and public health. Visit our website to join us in raising awareness about this pressing concern.
              </p>
            </CardFooter>
          </Card>
        </Link>
        
        {/* Card para Acidificación del agua */}
        <Link to="/acidification" className="w-full md:w-1/2 lg:w-1/4 ">
          <Card className="shadow-lg lg:max-w-sm p-4">
            <CardHeader className="pb-2">
              <CardTitle>Introduction</CardTitle>
              <CardDescription>Water Acidification</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={CO2} alt="Water Acidification" className="w-full h-36 object-cover" />
            </CardContent>
            <CardFooter className="pt-2">
              <p className="text-sm">
              Water acidification occurs when carbon dioxide (CO₂) from the atmosphere dissolves into water bodies, leading to a decrease in pH levels. This process is primarily driven by human activities such as the burning of fossil fuels—like those used in cars and factories—and deforestation. Lower pH levels can have harmful effects on aquatic ecosystems, affecting the survival of various marine species. Understanding the causes and consequences of water acidification is crucial for developing strategies to mitigate its impact.
              </p>
            </CardFooter>
          </Card>
        </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
