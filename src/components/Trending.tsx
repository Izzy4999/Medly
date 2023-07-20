import { PiDotsThree } from "react-icons/pi";

interface Props {
  trendingSector: string;
  engagement: number;
  trendingTopic: string;
  trendingNiche: string;
}
const Trending = ({
  engagement,
  trendingNiche,
  trendingSector,
  trendingTopic,
}: Props) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mx-1 mb-2">
        <div>
          <div>
            <div className="d-flex align-items-center">
              <p className="text me-0">{trendingSector}</p>
              <p className="pb-1 fw-bold">.</p>
              <p className="text ms-0">{trendingNiche}</p>
            </div>
          </div>
          <p className="label">{trendingTopic}</p>
          <p className="text">{engagement} Engagements</p>
        </div>
        <PiDotsThree size={20} />
      </div>
    </div>
  );
};

export default Trending;
