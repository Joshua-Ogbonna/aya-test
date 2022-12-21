import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar__component">
      <div className="brand">
        <div>aY</div>
        <span>Aya</span>
      </div>
      <div className="right">
        <div className="profile">
          <Image src="/vin.svg" alt="profile svg" width={42} height={42} />
          <span>Vin Austin</span>
        </div>
        <hr />
        <div>
          <Image src="/logout.svg" alt="logout" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
