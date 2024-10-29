// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Introduction from '../components/Introduction';
import CarouselSection from '../components/CarouselSection';
import CO2 from "/CO2.png";
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
    <div className="h-screen overflow-y-auto"> 
      <Header />
      <Introduction />
      <CarouselSection />

      {/* Contenedor de las tarjetas en una fila */}
      <div className="flex flex-col md:flex-row justify-center gap-8 my-8 px-4">
        {/* Card para Contaminación del agua */}
        <Card className="w-full md:w-1/2 lg:w-1/3 shadow-lg">
          <CardHeader>
            <CardTitle>Introducción</CardTitle>
            <CardDescription>Contaminación del agua</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={contaminacionAgua} alt="Contaminación del Agua" className="w-full h-48 object-cover" />
          </CardContent>
          <CardFooter>
            <p>
              La contaminación del agua es uno de los problemas ambientales más críticos de la actualidad. 
              Aguas residuales, productos químicos industriales, plásticos y residuos agrícolas se vierten en 
              ríos, lagos y océanos, afectando tanto a la vida acuática como a la salud humana. Estos contaminantes 
              no solo alteran los ecosistemas, sino que también ponen en riesgo el suministro de agua potable 
              para millones de personas.
            </p>
            <p>
              Para combatir esta crisis, es crucial promover prácticas sostenibles y reducir la cantidad de 
              contaminantes que entran en nuestros cuerpos de agua. Al entender las causas y efectos de la 
              contaminación del agua, podemos tomar medidas para proteger y preservar este recurso vital.
            </p>
          </CardFooter>
        </Card>

        {/* Card para Acidificación del agua */}
        <Card className="w-full md:w-1/2 lg:w-1/3 shadow-lg">
          <CardHeader>
            <CardTitle>Introducción</CardTitle>
            <CardDescription>Acidificación del agua</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={CO2} alt="Acidificación del Agua" className="w-full h-48 object-cover" />
          </CardContent>
          <CardFooter>
            <p>
              Este fenómeno ocurre cuando el dióxido de carbono (CO₂) de la atmósfera se disuelve en el agua, 
              disminuyendo su pH. Proviene de actividades humanas como la quema de combustibles fósiles (carros 
              y fábricas) y la deforestación.
            </p>
          </CardFooter>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
