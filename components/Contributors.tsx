import next from "next";
import Image from "next/image";
import { Input, Table } from "reactstrap";
import { contributors } from "../assets/data";
import Card from "./Card";

const Contributors = () => {
  return (
    <div className="all__contributors">
      <div className="top__contributors">
        {contributors
          .slice(0, 3)
          .map(
            (
              {
                profileURL,
                name,
                username,
                numOfContributions,
                openIssues,
                commits,
                pullRequests,
              },
              idx
            ) => (
              <Card
                profileURL={profileURL}
                name={name}
                username={username}
                numOfContributions={numOfContributions}
                openIssues={openIssues}
                commits={commits}
                pullRequests={pullRequests}
                key={idx}
                idx={idx}
              />
            )
          )}
      </div>

      {/* Other contributors */}
      <div className="other__contributors">
        {/* Contributors */}
        <div className="contributors">
          <Table responsive borderless>
            <thead>
              <tr>
                <th>
                  <div className="search">
                    <Image
                      src="/search-normal.svg"
                      alt="Search normal"
                      width={20}
                      height={20}
                    />
                    <Input type="search" placeholder="Search for user..." />
                  </div>
                </th>
                <th>
                  <div className="contributions sames">
                    <span>PUBLIC CONTRIBUTIONS</span>
                  </div>
                </th>
                <th>
                  <div className="open__issues sames">
                    <span>OPEN ISSUES</span>
                  </div>
                </th>
                <th>
                  <div className="commits sames">
                    <span>COMMITS</span>
                  </div>
                </th>
                <th>
                  <div className="pull__requests sames">
                    <span>PULL REQUESTS</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {contributors.slice(2).map((contributor, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="profile">
                      <span>{contributors.slice(2).length + idx + 1}th</span>
                      <Image
                        src={contributor.profileURL}
                        alt={contributor.name}
                        width={72}
                        height={72}
                      />
                      <div>
                        <h5>{contributor.name}</h5>
                        <p>{contributor.username}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="contributions">
                      <button>{contributor.numOfContributions}</button>
                    </div>
                  </td>
                  <td>
                    <div className="open__issues">
                      <Image
                        src="/circle.svg"
                        alt="circle"
                        width={20}
                        height={20}
                      />
                      <span>{contributor.openIssues}</span>
                    </div>
                  </td>
                  <td>
                    <div className="commits">
                      <Image
                        src="/settings.svg"
                        alt="settings"
                        width={20}
                        height={20}
                      />
                      <span>{contributor.commits}</span>
                    </div>
                  </td>
                  <td>
                    <div className="pull__requests">
                      <Image
                        src="/hierarchy.svg"
                        alt="pull requests"
                        width={20}
                        height={20}
                      />
                      <span>{contributor.pullRequests}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
