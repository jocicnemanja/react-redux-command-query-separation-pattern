import React from "react";

interface BookProps {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
}

export default function BookCard({
  id,
  thumbnail,
  title,
  description,
}: BookProps) {
  return (
    <div id={id}>
      <img src={thumbnail} alt=" :(" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
