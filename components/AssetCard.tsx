import styled from "styled-components";
import getRarityColor from "../src/getRarityColor";
import { Weapon } from "../src/interfaces";

interface CardProps {
  bg: string;
}

const Card = styled.div<CardProps>`
  position: relative;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.bg};
    background-image: linear-gradient(rgba(0, 0, 0, 0.75), black);
    opacity: 0.2;
    z-index: -10;
  }
`;

interface AssetCardProps {
  asset: Weapon;
}

export default function AssetCard({ asset }: AssetCardProps) {
  return (
    <>
      <Card
        bg={getRarityColor(asset.rarity)}
        className="w-full max-w-screen-sm px-5 py-5 border-2 border-neutral-600 "
      >
        <div className="flex flex-col justify-between py-5">
          <h1 className="text-2xl">{asset.name_ko}</h1>
          <h2 className="">{asset.name_en}</h2>
          <span>{asset.rarity}</span>
        </div>
        <div className="h-px w-full bg-neutral-600" />
        <div className="py-3 flex flex-col gap-4 items-center">
          <div className="w-full flex justify-around">
            <div className="flex items-center w-36">데미지</div>
            <div className="w-36 flex-col">
              {asset.damage.map((item) => (
                <div>{item}</div>
              ))}
            </div>
          </div>
          <div className="h-px w-5/6 bg-neutral-600" />

          <div className="w-full flex justify-around">
            <div className="w-36 flex items-center">범위</div>
            <div className="w-36">{asset.weaponRange}m</div>
          </div>
          <div className="h-px w-5/6 bg-neutral-600" />

          <div className="w-full flex justify-around">
            <div className="w-36">강화 수치</div>
            <div className="w-36">{asset.enchantment}</div>
          </div>
          <div className="h-px w-5/6 bg-neutral-600" />

          <div className="w-full flex justify-around">
            <div className="flex items-center w-36">특성</div>
            <div className="w-36 flex flex-col">
              {asset.trait.map((item) => (
                <div>{item}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-neutral-600" />

        <div className="py-5">
          <div className="w-36 px-3 p-3">숙련 스킬</div>
          <div className="flex flex-col gap-3 whitespace-pre-wrap px-3">
            {asset.weaponActions.length > 0
              ? asset.weaponActions.map((special) => (
                  <div className="pl-2">
                    {special.split(": ").length === 2
                      ? special.split(": ").map((token, index) => {
                          if (index === 0)
                            return <div className="pl-2">{token}</div>;
                          return <div>{token}</div>;
                        })
                      : special}
                  </div>
                ))
              : "-"}
          </div>
        </div>
        <div className="h-px w-full bg-neutral-600" />

        <div className="py-3">
          <div className="w-36 px-3 pb-3">무기 스킬</div>
          <div className="flex flex-col gap-3 whitespace-pre-wrap px-3">
            {asset.special.length > 0
              ? asset.special.map((special) => (
                  <div>
                    {special.split(": ").length === 2
                      ? special.split(": ").map((token, index) => {
                          if (index === 0)
                            return <div className="pl-2">{token}</div>;
                          return <div>{token}</div>;
                        })
                      : special}
                  </div>
                ))
              : "-"}
          </div>
        </div>
      </Card>

      {asset.info !== "-" && (
        <div className="text-white w-full max-w-screen-sm px-3 leading-relaxed whitespace-pre-wrap">
          {" " + asset.info}
        </div>
      )}

      {asset?.comment !== "" && (
        <>
          <div className="text-white w-full max-w-screen-sm px-3 leading-relaxed whitespace-pre-wrap flex flex-col gap-5">
            <h4 className="text-xl">추가 정보</h4>
            <div>{" " + asset.comment.replace(". ", ". \n")}</div>
          </div>
          <hr />
        </>
      )}

      {asset.howToGet !== "" && (
        <div className="text-white w-full max-w-screen-sm px-3 leading-relaxed whitespace-pre-wrap flex flex-col gap-5">
          <h4 className="text-xl mb-3">입수 방법</h4>
          <div>{" " + asset.howToGet.replace(". ", ". \n")}</div>
        </div>
      )}
    </>
  );
}
