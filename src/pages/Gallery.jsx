// import pic1 from "../assets/7F89025C-5235-4168-B0E0-94D460F99C58.png";
// import pic2 from "../assets/8D0CBC60-D4E7-4FCF-9071-DC4598FCD0B7.png";
// import pic3 from "../assets/AC084C36-8B2F-4229-9F46-9DC3D01EBC9A.png";

// import pic4 from "../assets/7A84A137-B625-4DC4-8EF6-5E953A5AA1CB.png";
// import pic5 from "../assets/F291A353-E7E3-4445-8273-C784D11F2F13.png";
// import pic6 from "../assets/CCF91E5B-32D6-4E4E-8646-B57A31ACE282.png";

// import pic7 from "../assets/D65485FD-F81A-437D-8CA5-798DE85F875D.png";
// import pic8 from "../assets/BC864E08-B041-444E-9019-297C270F6B67.png";
// import pic9 from "../assets/D692B0EF-22EF-4957-913C-39949904966C.png";

import primary1 from "../assets/primary1.png";
import primary2 from "../assets/primary2.png";
import bg1 from "../assets/kimono.png";
import bg2 from "../assets/87B59C6F-8CF2-44FD-B297-2C43FAD85FC8.png";
import bg3 from "../assets/0510D9A1-A676-4437-A587-D0FDC747F46D.png";
import ShootingPreview from "../components/ShootingPreview";
import { useState } from "react";
import { isMobile } from "react-device-detect";

const Gallery = () => {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);

  const handleMouseDown = (e) => {
    const position = e.touches ? e.touches[0].clientX : e.clientX;
    setMouseDownAt(position);
  };

  const handleMouseMove = (e) => {
    if (mouseDownAt === 0) return;

    const position = e.touches ? e.touches[0].clientX : e.clientX;

    const mouseDelta = parseFloat(mouseDownAt) - position,
      maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentage = parseFloat(prevPercentage) + percentage;

    setPercentage(nextPercentage);

    document.getElementById(
      "image-track"
    ).style.transform = `translate(${nextPercentage}%, -50%)`;
  };

  const handleMouseUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  isMobile
    ? ((window.ontouchstart = handleMouseDown),
      (window.ontouchmove = handleMouseMove),
      (window.ontouchend = handleMouseUp))
    : ((window.onmousedown = handleMouseDown),
      (window.onmousemove = handleMouseMove),
      (window.onmouseup = handleMouseUp));

  return (
    <div className="h-screen w-screen bg-primary overflow-hidden relative">
      <div
        id="image-track"
        className="flex absolute left-1/2 top-1/2 -translate-y-1/2"
      >
        <ShootingPreview imgUrl={primary1} />
        <ShootingPreview imgUrl={primary2} />
        <ShootingPreview imgUrl={bg1} />
        <ShootingPreview imgUrl={bg2} />
        <ShootingPreview imgUrl={bg3} />
      </div>
      <div className="absolute">{mouseDownAt}</div>
    </div>
  );
};

export default Gallery;
