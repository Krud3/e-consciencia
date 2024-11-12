import React from 'react';
import CO2 from "/CO2.png";
import sensitization from "/sensitization.png";
import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  

const Sensitization = () => {
  return (
    <>
        {/* Card para Acidificación del agua */}
        <Link to="/acidification" className="w-full md:w-1/2 lg:w-1/4 ">
          <Card className="shadow-lg p-4 mx-auto mt-4 mb-4 mx-2">
            <CardHeader className="pb-2 text-center">
              <CardTitle>Sensitization</CardTitle>
              <CardDescription>Water Acidification</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={sensitization} alt="Water Acidification" className="w-full h-36 object-cover" />
            </CardContent>
            <CardFooter className="pt-2">
              
              <div className="sensitization-section">
                <h2 className="text-2xl font-semibold mt-4">Causes of Ocean Acidification</h2>
                <p>
                Ocean acidification is mainly caused by the absorption of <strong>carbon dioxide (CO₂)</strong> from the atmosphere. Emissions from <strong>factory smoke</strong> and other industrial activities release large amounts of CO₂, which dissolves in seawater, lowering the ocean’s pH level and making it more acidic.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Effects on Marine Life</h2>
                <p>The increase in ocean acidity has severe consequences for marine creatures:</p>
                <ul className="list-disc ml-6">
                <li>
                    <strong>Starfish:</strong> Lose their natural vibrant colors, becoming dull and weakened as their calcium structures dissolve.
                </li>
                <li>
                    <strong>Crabs:</strong> Struggle to form strong shells, making them more vulnerable to predators.
                </li>
                <li>
                    <strong>Corals:</strong> Experience <span className="highlight">coral bleaching</span>, where they lose their color and turn white due to stress from acidity, which can eventually lead to their death.
                </li>
                <li>
                    <strong>Fish:</strong> Behavior is altered, making it harder for them to find food and evade predators.
                </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4">Potential Solution: Algae</h2>
                <p>
                One promising solution is the cultivation of <strong>algae</strong>. Algae absorb CO₂ as they grow, helping to reduce carbon levels in the water and mitigating the effects of ocean acidification.
                </p>
              </div>
            </CardFooter>
          </Card>
        </Link>
        
    
    </>


  );
};

export default Sensitization;
