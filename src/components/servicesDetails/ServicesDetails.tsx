import React, { useState, useEffect, useCallback } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import OfferCard from "../offerCard/OfferCard";

interface ServicesDetailsProps {
  selectedService: string;
}

interface OfferCardProps {
  title: string;
  description: string;
  link: string;
}

const ServicesDetails: React.FC<ServicesDetailsProps> = ({
  selectedService,
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [descriptionList, setDescriptionList] = useState<string[]>([]);
  const [offerCardDetails, setOfferCardDetails] = useState<OfferCardProps[]>(
    []
  );

  const setServiceDetails = useCallback(() => {
    switch (selectedService) {
      case "Digital":
        setTitle("Digital marketing");
        setDescription(
          "Lorem ipsum dolor sit amet consectetur. Et scelerisque urna vulputate amet pharetra bibendum arcu aliquam:"
        );
        setDescriptionList([
          "Tempus nec pellentesque eget in morbi nulla.",
          "Amet morbi in cursus non scelerisque orci.",
          "A vitae maecenas nulla feugiat purus ut ut.",
          "Elit tortor enim non lorem tincidunt duis duis egestas feugiat.",
          "Eget urna at nisl malesuada bibendum a.",
        ]);
        setOfferCardDetails([
          {
            title: "Offer N",
            description:
              "Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus venenatis et pulvinar nec.",
            link: "",
          },
          {
            title: "Offer N",
            description:
              "Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus venenatis et pulvinar nec.",
            link: "",
          },
          {
            title: "Offer N",
            description:
              "Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus venenatis et pulvinar nec.",
            link: "",
          },
        ]);
        break;
      case "Content":
        setTitle("Content marketing");
        setDescription(
          "Lorem ipsum dolor sit amet consectetur. Et scelerisque urna vulputate amet pharetra bibendum arcu aliquam:"
        );
        setDescriptionList([
          "Tempus nec pellentesque eget in morbi nulla.",
          "Amet morbi in cursus non scelerisque orci.",
          "A vitae maecenas nulla feugiat purus ut ut.",
          "Elit tortor enim non lorem tincidunt duis duis egestas feugiat.",
          "Eget urna at nisl malesuada bibendum a.",
        ]);
        setOfferCardDetails([
          {
            title: "Offer N",
            description:
              "Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus venenatis et pulvinar nec.",
            link: "",
          },
          {
            title: "Offer N",
            description:
              "Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus venenatis et pulvinar nec.",
            link: "",
          },
          {
            title: "Offer N",
            description:
              "Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus venenatis et pulvinar nec.",
            link: "",
          },
        ]);
        break;
      case "Web":
        setTitle("Web Design & Development");
        setDescription(
          "Lorem ipsum dolor sit amet consectetur. Et scelerisque urna vulputate amet pharetra bibendum arcu aliquam:"
        );
        setDescriptionList([
          "Tempus nec pellentesque eget in morbi nulla.",
          "Amet morbi in cursus non scelerisque orci.",
          "A vitae maecenas nulla feugiat purus ut ut.",
          "Elit tortor enim non lorem tincidunt duis duis egestas feugiat.",
          "Eget urna at nisl malesuada bibendum a.",
        ]);
        setOfferCardDetails([
          {
            title: "Offer N",
            description:
              "Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus venenatis et pulvinar nec.",
            link: "",
          },
          {
            title: "Offer N",
            description:
              "Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus venenatis et pulvinar nec.",
            link: "",
          },
          {
            title: "Offer N",
            description:
              "Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus venenatis et pulvinar nec.",
            link: "",
          },
        ]);
        break;
      case "Branding":
        setTitle("Branding & Creative Services");
        setDescription(
          "Lorem ipsum dolor sit amet consectetur. Et scelerisque urna vulputate amet pharetra bibendum arcu aliquam:"
        );
        setDescriptionList([
          "Tempus nec pellentesque eget in morbi nulla.",
          "Amet morbi in cursus non scelerisque orci.",
          "A vitae maecenas nulla feugiat purus ut ut.",
          "Elit tortor enim non lorem tincidunt duis duis egestas feugiat.",
          "Eget urna at nisl malesuada bibendum a.",
        ]);
        setOfferCardDetails([
          {
            title: "Offer N",
            description:
              "Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus venenatis et pulvinar nec.",
            link: "",
          },
          {
            title: "Offer N",
            description:
              "Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus venenatis et pulvinar nec.",
            link: "",
          },
          {
            title: "Offer N",
            description:
              "Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus venenatis et pulvinar nec.",
            link: "",
          },
        ]);
        break;
      default:
        setTitle("");
        setDescription("");
        setDescriptionList([]);
        break;
    }
  }, [selectedService]);

  useEffect(() => {
    setServiceDetails();
  }, [selectedService, setServiceDetails]);

  return (
    <Card
      sx={{
        border: "1px solid #000",
        borderRadius: "16px",
        boxShadow: "0px 4px 4px 0px #00000040",
        width: "66%",
        height: "774px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 500,
            lineHeight: "36.31px",
            mt: 2,
          }}
        >
          {title}
        </Typography>
        <Box sx={{ width: "95%", mt: 8 }}>
          <Typography sx={{ fontSize: "24px", lineHeight: "29.05px" }}>
            {description}
          </Typography>
          {descriptionList.map((descriptionItem) => {
            return (
              <Typography sx={{ fontSize: "24px", lineHeight: "29.05px" }}>
                -{descriptionItem}
              </Typography>
            );
          })}
        </Box>
        <Box sx={{ display: "flex", gap: "40px", flexWrap: "wrap", mt: 6 }}>
          {offerCardDetails.map((offerCard: OfferCardProps) => {
            return <OfferCard {...offerCard} />;
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServicesDetails;
