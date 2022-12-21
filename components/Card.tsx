import next from "next";
import Image from "next/image";

interface ICard {
  profileURL: string;
  name: string;
  username: string;
  numOfContributions: number;
  commits: number;
  openIssues: number;
  pullRequests: number;
  idx: number;
}

const Card: React.FC<ICard> = ({
  profileURL,
  name,
  username,
  numOfContributions,
  commits,
  openIssues,
  pullRequests,
  idx,
}) => {
  return (
    <div className="contributor__card">
      <div className="card__head">
        <div className="card__image">
          <Image src={profileURL} alt="profileURL" width={92} height={92} />
          <span className={(idx + 1) % 2 === 0 ? "even__class" : "odd__class"}>
            {idx + 1}
          </span>
        </div>
        <h5>{name}</h5>
        <p>{username}</p>
        <button>{numOfContributions}</button>
      </div>
      <div className="card__footer">
        <div className="open__issues">
          <Image src="/circle.svg" alt="Open issues" width={20} height={20} />
          <span>{openIssues}</span>
        </div>
        <div className="commits">
          <Image src="/settings.svg" alt="commits" width={20} height={20} />
          <span>{commits}</span>
        </div>
        <div className="pull__requests">
          <Image
            src="/hierarchy.svg"
            alt="pullRequests"
            width={20}
            height={20}
          />
          <span>{pullRequests}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
