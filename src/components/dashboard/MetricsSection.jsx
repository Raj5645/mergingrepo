import React, { useEffect, useState } from 'react';
import Card from '../common/Card';

const MetricsSection = () => {
  const metrics = [
    {
      title: "Revenue",
      value: "₹84,950",
      icon: "/images/img_hugeiconsbitcoinpiggybank.svg"
    },
    {
      title: "Tickets Sold",
      value: "6,241",
      icon: "/images/img_carbonmeteralt.svg"
    },
    {
      title: "Views",
      value: "4,380",
      icon: "/images/img_solargraphdownbroken.svg"
    },
    {
      title: "AD Spends",
      value: "₹6,256",
      icon: "/images/img_solarwalletmoneylineduotone.svg"
    },
    {
      title: "Likes",
      value: "5,000",
      icon: "/images/img_solarlikebroken.svg"
    }
  ];

  // const [metrics,setMetrics] = useState([]);

  
  // useEffect(()=>{

  //   const getData = async () =>{

  //     try {
  //       const response = await fetch("",{
  //         method:"GET",
  //         headers:{
  //           "Content-Type": "apllication/json";
  //         },
  //         body: JSON.stringify();
  //       });

  //       if(!response.ok)
  //       {
  //          console.log("in metrics response  not fetched");
  //          return ;
  //       }


  //     } catch (error) {
  //       console.log("error in metricsection is:", error);
  //     }
  // getData();

  //   }


  // },[]);




  return (
    <div className="grid grid-cols-5 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <Card
          key={index}
          title={metric.title}
          value={metric.value}
          icon={metric.icon}
          className="h-[137px] w-full"
        />
      ))}
    </div>
  );
};

export default MetricsSection;