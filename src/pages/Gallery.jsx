import Shoots from "../components/Shoots";
import pic1 from "../assets/7F89025C-5235-4168-B0E0-94D460F99C58.png";
import pic2 from "../assets/8D0CBC60-D4E7-4FCF-9071-DC4598FCD0B7.png";
import pic3 from "../assets/AC084C36-8B2F-4229-9F46-9DC3D01EBC9A.png";
import pic4 from "../assets/7A84A137-B625-4DC4-8EF6-5E953A5AA1CB.png";
import pic5 from "../assets/F291A353-E7E3-4445-8273-C784D11F2F13.png";
import pic6 from "../assets/CCF91E5B-32D6-4E4E-8646-B57A31ACE282.png";

const Gallery = () => {
  const kimono = [pic1, pic2, pic3];
  const streetClip = [pic4, pic5, pic6];
  return (
      <div className="snap-y snap-mandatory">
        <Shoots images={kimono} />
        <Shoots images={streetClip} />
      </div>
  );
};

export default Gallery;
