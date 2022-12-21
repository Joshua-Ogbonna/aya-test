import next from "next";
import Image from "next/image";
import Link from "next/link";

const Top = () => {
  return (
    <div className="top__component">
      <div className="left">
        <Link href=""><Image src="/left.svg" alt="back arrow" width={24} height={24} />Back to Dashboard</Link>
      </div>
      <div className="center">
        <h3>Top Public Contributors</h3>
        <p>30 Oct - 20 Dec</p>
      </div>
      <div className="right">
        <button className="recent">This week</button>
        <button className="last">Last week</button>
      </div>
    </div>
  );
};

export default Top;
