import React from "react";
import { Card, CardContent, Typography, Box, Skeleton } from "@mui/material";

interface UserReviewCardProps {
  profileImageUrl: string;
  username: string;
  userReview: string;
}

const UserReviewCard: React.FC<UserReviewCardProps> = ({
  username,
  userReview,
  profileImageUrl,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "594px",
        border: "1px solid #000",
        borderRadius: "16px",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
          {profileImageUrl ? (
            <img src={profileImageUrl} alt="" />
          ) : (
            <Skeleton
              animation="wave"
              variant="circular"
              width={57}
              height={57}
            />
          )}
          {username ? (
            <Box>{username}</Box>
          ) : (
            <Skeleton
              sx={{ bgcolor: "primary.dark" }}
              animation="wave"
              variant="rounded"
              width={163}
              height={31}
            />
          )}
        </Box>
        {userReview ? (
          <Box>{userReview}</Box>
        ) : (
          <>
            <Skeleton
              animation="wave"
              variant="rectangular"
              sx={{ mt: 4, width: "539px", height: "31px" }}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              sx={{ mt: 1, width: "413px", height: "31px" }}
            />
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default UserReviewCard;
