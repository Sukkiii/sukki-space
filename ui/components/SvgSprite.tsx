import fs from "fs";
import path from "path";

export default function SvgSprite() {
  const filePath = path.join(process.cwd(), "public/assets/sprite.svg");
  const sprite = fs.readFileSync(filePath, "utf8");

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sprite }}
      style={{ display: "none" }}
    />
  );
}
