import Shoots from "../components/Shoots";
import pic1 from "../assets/7F89025C-5235-4168-B0E0-94D460F99C58.png";
import pic2 from "../assets/8D0CBC60-D4E7-4FCF-9071-DC4598FCD0B7.png";
import pic3 from "../assets/AC084C36-8B2F-4229-9F46-9DC3D01EBC9A.png";
import pic4 from "../assets/7A84A137-B625-4DC4-8EF6-5E953A5AA1CB.png";
import pic5 from "../assets/F291A353-E7E3-4445-8273-C784D11F2F13.png";
import pic6 from "../assets/CCF91E5B-32D6-4E4E-8646-B57A31ACE282.png";
import pic7 from "../assets/D65485FD-F81A-437D-8CA5-798DE85F875D.png";
import pic8 from "../assets/BC864E08-B041-444E-9019-297C270F6B67.png";
import pic9 from "../assets/D692B0EF-22EF-4957-913C-39949904966C.png";

import bg1 from "../assets/kimono.png";
import bg2 from "../assets/87B59C6F-8CF2-44FD-B297-2C43FAD85FC8.png";
import bg3 from "../assets/0510D9A1-A676-4437-A587-D0FDC747F46D.png";

const Gallery = () => {
  const kimono = [pic1, pic2, pic3];
  const streetClip = [pic4, pic5, pic6];
  const studio = [pic7, pic8, pic9];
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Shoots images={kimono} bg={bg1} />
      <Shoots images={streetClip} bg={bg2} />
      <Shoots images={studio} bg={bg3} />
    </div>
  );
};

export default Gallery;
