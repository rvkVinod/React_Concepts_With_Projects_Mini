import React from "react";

const Image = () => {
  const arr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkvTEq3AArvJ2kfecnGlaOCE8v9HcpTuASw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVvtiuJksfjhgk2GnWC6fTp_57tirpOmtXw&usqp=CAU",
    "https://wallpapers.com/images/hd/4k-programming-black-coding-screen-1x5zj2wiqx6spcu2.jpg",
  ];
  return (
    <>
      <h3>image component</h3>
      {/* bad way of coding similar elements mutliptletimes instread this we are doing in a arr */}
      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkvTEq3AArvJ2kfecnGlaOCE8v9HcpTuASw&usqp=CAU"
        alt="img1"
        height={150}
        width={200}
       

      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVvtiuJksfjhgk2GnWC6fTp_57tirpOmtXw&usqp=CAU"
        alt="img1"
        height={150}
        width="156em"
      /> */}
 
{arr.map((a,b)=>(<img key={b} src={a} />))}
    </>

  );
};

export default Image;
