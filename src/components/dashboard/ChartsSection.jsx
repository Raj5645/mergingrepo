import React, { useEffect, useRef } from 'react';
import Card from '../common/Card';

const ChartsSection = () => {
  const ticketChartRef = useRef(null);
  const platformChartRef = useRef(null);
  const registrationChartRef = useRef(null);

  // Simulate chart rendering with images from the design
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

  //   }

  // getData();


  // },[]);


  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Registration Trend Chart */}
      <div className="col-span-3">
        <Card className="h-[371px] p-6">
          <h2 className="text-[18px] font-semibold text-white font-['Ruda'] mb-6">Registration Trend</h2>
          <div className="relative h-[240px]">
            <div className="absolute right-0 top-0 h-full">
              <div className="flex flex-col justify-between h-full">
                <div className="text-right">
                  <p className="text-[12px] text-[#8a8a8a] font-['Ruda']">7000</p>
                  <div className="h-[1px] w-[237px] bg-[#2f2f2f] mt-2"></div>
                </div>
                <div className="text-right">
                  <p className="text-[12px] text-[#8a8a8a] font-['Ruda']">5000</p>
                  <div className="h-[1px] w-[237px] bg-[#2f2f2f] mt-2"></div>
                </div>
                <div className="text-right">
                  <p className="text-[12px] text-[#8a8a8a] font-['Ruda']">3000</p>
                  <div className="h-[1px] w-[237px] bg-[#2f2f2f] mt-2"></div>
                </div>
              </div>
            </div>
            
            <img 
              src="/images/img_stories_120x202.png" 
              alt="Registration Trend Chart" 
              className="absolute left-[86px] top-0 w-[120px] h-[202px]"
              ref={registrationChartRef}
            />
            
            <div className="absolute bottom-0 left-[86px] flex justify-between w-[237px]">
              <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">Week 1</p>
              <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">Week 2</p>
              <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">Week 3</p>
              <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">Week 4</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tickets Sold Chart */}
      <div className="col-span-4">
        <Card className="h-[371px] p-4">
          <div className="p-2">
            <h2 className="text-[18px] font-semibold text-white font-['Ruda']">20 Tickets sold</h2>
            <div className="flex items-center mt-2">
              <img src="/images/img_icon.svg" alt="Up Arrow" className="w-[17px] h-[17px]" />
              <span className="text-[12px] font-bold text-[#32a06e] ml-1">10.8%</span>
              <span className="text-[12px] font-bold text-[#8a8a8a] ml-2">vs. yesterday</span>
            </div>
            
            <div className="relative h-[240px] mt-6">
              <div className="absolute left-0 top-0 h-full">
                <div className="flex flex-col justify-between h-full">
                  <div className="text-right">
                    <p className="text-[12px] text-[#8a8a8a] font-['Ruda']">7000</p>
                    <div className="h-[1px] w-[237px] bg-[#2f2f2f] mt-2 ml-[73px]"></div>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] text-[#8a8a8a] font-['Ruda']">5000</p>
                    <div className="h-[1px] w-[237px] bg-[#2f2f2f] mt-2 ml-[73px]"></div>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] text-[#8a8a8a] font-['Ruda']">3000</p>
                    <div className="h-[1px] w-[237px] bg-[#2f2f2f] mt-2 ml-[73px]"></div>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] text-[#8a8a8a] font-['Ruda']">1000</p>
                    <div className="h-[1px] w-[237px] bg-[#2f2f2f] mt-2 ml-[73px]"></div>
                  </div>
                </div>
              </div>
              
              <img 
                src="/images/img_stories.png" 
                alt="Tickets Sold Chart" 
                className="absolute left-[73px] top-[108px] w-[156px] h-[202px]"
                ref={ticketChartRef}
              />
              
              <div className="absolute bottom-0 left-[73px] flex justify-between w-[237px]">
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">Week 1</p>
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">Week 2</p>
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">Week 3</p>
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">Week 4</p>
              </div>
            </div>
            
            <div className="flex mt-4 space-x-4">
              <div className="bg-[#212121] rounded-[4px] px-2 py-1 flex items-center">
                <img src="/images/img_assets_legend_linechart.png" alt="Line" className="w-[17px] h-[2px]" />
                <span className="text-[12px] text-[#777777] ml-2 font-['Ruda']">Today</span>
              </div>
              <div className="bg-[#212121] rounded-[4px] px-2 py-1 flex items-center">
                <img src="/images/img_vector.svg" alt="Dots" className="w-[10px] h-[2px]" />
                <span className="text-[12px] text-[#777777] ml-2 font-['Ruda']">Yesterday</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Platform Stats Chart */}
      <div className="col-span-4">
        <Card className="h-[370px] p-5">
          <h2 className="text-[18px] font-semibold text-white font-['Ruda'] mb-6">Different Platform Stats</h2>
          
          <div className="relative h-[200px]">
            <div className="absolute left-0 top-0 h-full">
              <div className="flex flex-col justify-between h-full">
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">5000</p>
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">4000</p>
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">3000</p>
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">2000</p>
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">1000</p>
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda']">0</p>
              </div>
            </div>
            
            <div className="absolute left-[57px] top-0 grid grid-cols-4 gap-x-16 w-[290px]">
              <div className="flex flex-col items-center">
                <img src="/images/img_1.png" alt="Week 1 Chart" className="w-[61px] h-[147px]" />
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda'] mt-2">Week 1</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/img_1.png" alt="Week 2 Chart" className="w-[62px] h-[147px]" />
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda'] mt-2">Week 2</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/img_1.png" alt="Week 3 Chart" className="w-[61px] h-[147px]" />
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda'] mt-2">Week 3</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/img_1.png" alt="Week 4 Chart" className="w-[61px] h-[147px]" />
                <p className="text-[13px] text-[#8a8a8a] font-['Ruda'] mt-2">Week 4</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center mt-8 justify-center space-x-8">
            <div className="flex items-center">
              <div className="w-[17px] h-[17px] rounded-[4px] bg-gradient-to-b from-[#3479ff] to-[#22e6ce]"></div>
              <span className="text-[14px] text-[#7c7b7b] ml-2 font-['Ruda']">Cirkle</span>
            </div>
            <div className="flex items-center">
              <div className="w-[17px] h-[17px] rounded-[4px] bg-[#ffc879]"></div>
              <span className="text-[14px] text-[#7c7b7b] ml-2 font-['Ruda']">BMS</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Customer Growth Chart */}
      <div className="col-span-4">
        <Card className="h-[373px] p-4">
          <h2 className="text-[18px] font-semibold text-white font-['Ruda']">Customer Growth</h2>
          <div className="flex items-center mt-2">
            <img src="/images/img_icon.svg" alt="Up Arrow" className="w-[17px] h-[17px]" />
            <span className="text-[12px] font-bold text-[#32a06e] ml-1">10.8%</span>
            <span className="text-[12px] font-bold text-[#8a8a8a] ml-2">vs. last event</span>
          </div>
          
          <div className="relative flex justify-center items-center mt-4">
            <div className="w-[282px] h-[282px] rounded-full bg-[#3d3d3d]"></div>
            <div className="absolute w-[282px] h-[282px] rounded-full border-2 border-[#464646]">
              <div className="absolute w-full h-full rounded-full overflow-hidden">
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#ffc879] rounded-bl-full"></div>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#3479ff] to-[#22e6ce] rounded-t-full"></div>
              </div>
            </div>
            
            {/* New Users Card */}
            <div className="absolute top-[123px] left-[113px] bg-[#464646] rounded-[12px] p-3 shadow-[0px_12px_48px_#00000028]">
              <p className="text-[19px] font-medium text-[#cccccc] font-['Ruda']">New</p>
              <div className="flex items-center mt-1">
                <div className="w-[24px] h-[24px] rounded-[5px] bg-gradient-to-b from-[#3479ff] to-[#22e6ce]"></div>
                <span className="text-[19px] font-medium text-[#fff2f2] ml-2 font-['Ruda']">20k</span>
              </div>
            </div>
            
            {/* Returning Users Card */}
            <div className="absolute bottom-[120px] left-[99px] bg-[#464646] rounded-[12px] p-3 shadow-[0px_12px_48px_#00000028]">
              <p className="text-[19px] font-medium text-[#cccccc] font-['Ruda']">Returning</p>
              <div className="flex items-center mt-1">
                <div className="w-[24px] h-[24px] rounded-[5px] bg-[#ffc879]"></div>
                <span className="text-[19px] font-medium text-[#fff2f2] ml-2 font-['Ruda']">20k</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChartsSection;