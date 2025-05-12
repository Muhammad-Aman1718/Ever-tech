import React from "react";
import OurCommunityCard from "./OurCommunityCard";
import MembersIcon from "../../../public/assets/community/members.svg";
import AssociationsIcon from "../../../public/assets/community/associations.svg";
import ClubsIcon from "../../../public/assets/community/clubs.svg";

const OurCommunity = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 w-full py-10 ">
      <div className="flex flex-col items-center gap-y-2 ">
        <h1 className=" text-[#4D4D4D] text-[36px] font-semibold leading-[44px] text-center max-w-[542px] ">
          Manage your entire community in a single system
        </h1>
        <p className=" leading-[24px] text-[#717171] ">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className=" flex items-center justify-around w-full ">
        <OurCommunityCard
          paragraph="Our membership management software provides full automation of membership renewals and payments"
          heading="Membership Organisations"
          img={MembersIcon}
        />
        <OurCommunityCard
          paragraph="Our membership management software provides full automation of membership renewals and payments"
          heading="National Associations"
          img={AssociationsIcon}
        />
        <OurCommunityCard
          paragraph="Our membership management software provides full automation of membership renewals and payments"
          heading="Clubs And Groups"
          img={ClubsIcon}
        />
      </div>
    </div>
  );
};

export default OurCommunity;
