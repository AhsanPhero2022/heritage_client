import { Link } from "react-router-dom";
import imageCount from "../assets/icons/Image count.png";
import rectangle from "../assets/icons/Rectangle 26.png";
import location from "../assets/icons/fi-bs-marker.png";
import Container from "../components/ui/Container";

const properties = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/c6ec/67a0/4fb99d3762cc982e9f6c74e22461ff1d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iM86ybZhhgd1JGMdwDZnAWHiwMusDWaq81VNpZOpimwWvjRIERfOtUmixhlTs6PA73y4tafuwT-eOp1~SvOt2eD0iQ3xD68i-pCgEZIKXxW5NH2xtoEZiNlsOU5ekCZ6O22RS94jgHdspCXVc0zXPqw4DixrrQSq09kFvorHFDc9K4VC4Fyi80JyKO9TqEbkb086b0nYWdKfZjjwMJZtBRJRNX1IkU0Xgbilb9gF-cEJDkLqmscMMPaH85amNCaRduP61Qr2AIVYtM3RSZj7jNjlkdAO42usEzIPsxerlSaP0aVTFZ9yDYhEXKholGH4fvyTgfzQxKBv~pjxzA~Gyw__",
    name: "SunnySlope Suites",
    location: "New York, NY",
    price: 250000,
  },
  {
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/e381/cbc3/5859fa9eae776ba1491c8e0846679a0b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTloik~XPfKvX35wCj9jVadrlAId0X~0E4kfdYuAUxNAIUwEi646-ZcgN7KNUe6k3i0aACqZWZGPdoy3~~RheAkQXlt9uY0-4npcAWh238CsaalU9E7H~wQ07TLPcTIbn01qpuIQnTMT6hhu4eZhPCbxxjKKJMkyW-B2s-Po9tdEim8ianyvZNa4r15fIqJ4QaqyB5rbyjQQ4kyJYuxi0keabLnYJrrWN7SbW72g3YNW8MSAP6-3V~vwDUFC-plPoIcHjGvmzZ9hUSVtQR6oPpNTyE2uCakAvsaBtqYiv--ucEmB-TgqkZD42N4ta9GWPhzSIZ6pCTDvas8I0yvwyA__",
    name: "SunnySlope Suites",
    location: "Portland, OR",
    price: 250000,
  },
  {
    id: 3,
    image:
      "https://s3-alpha-sig.figma.com/img/e1fe/9540/4a524ce0f30f319b1b0616521eea2317?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y07hucj98k1G9jqcbvlGrpda7TWu6z3UfX6zzEYAN2j88mXvaqZwAHHnuKoDmOz27ObJfHxMhRuumqS-a1HL-LJ7xtXww7XNxGCHDlkAGC~CA9-iFtIcuMv2bZotUKOW45Vk9iudbTawyeCcY3cRhZQ45qnKS7IDRIR9YXMcNA7PAcyugs4UkimkoGZP9ld0UoKzBoy6a3d8GwGI5dTqRhGechWN-SHzgLsXLub9bnq0cJcPEnMOsDgrWwee~rb8BfUV4zgbBG7t5bgFmd3iHtVbnjRpcZbRnXaB3Rv45pCdgxM9KzuCgPTdW0cRRPkLT-L07hOTiPNObzyaG9l~Lw__",
    name: "SunnySlope Suites",
    location: "Los Angeles, CA",
    price: 250000,
  },
  {
    id: 4,
    image:
      "https://s3-alpha-sig.figma.com/img/c6ec/67a0/4fb99d3762cc982e9f6c74e22461ff1d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iM86ybZhhgd1JGMdwDZnAWHiwMusDWaq81VNpZOpimwWvjRIERfOtUmixhlTs6PA73y4tafuwT-eOp1~SvOt2eD0iQ3xD68i-pCgEZIKXxW5NH2xtoEZiNlsOU5ekCZ6O22RS94jgHdspCXVc0zXPqw4DixrrQSq09kFvorHFDc9K4VC4Fyi80JyKO9TqEbkb086b0nYWdKfZjjwMJZtBRJRNX1IkU0Xgbilb9gF-cEJDkLqmscMMPaH85amNCaRduP61Qr2AIVYtM3RSZj7jNjlkdAO42usEzIPsxerlSaP0aVTFZ9yDYhEXKholGH4fvyTgfzQxKBv~pjxzA~Gyw__",
    name: "SunnySlope Suites",
    location: "Miami, FL",
    price: 250000,
  },
  {
    id: 5,
    image:
      "https://s3-alpha-sig.figma.com/img/e381/cbc3/5859fa9eae776ba1491c8e0846679a0b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTloik~XPfKvX35wCj9jVadrlAId0X~0E4kfdYuAUxNAIUwEi646-ZcgN7KNUe6k3i0aACqZWZGPdoy3~~RheAkQXlt9uY0-4npcAWh238CsaalU9E7H~wQ07TLPcTIbn01qpuIQnTMT6hhu4eZhPCbxxjKKJMkyW-B2s-Po9tdEim8ianyvZNa4r15fIqJ4QaqyB5rbyjQQ4kyJYuxi0keabLnYJrrWN7SbW72g3YNW8MSAP6-3V~vwDUFC-plPoIcHjGvmzZ9hUSVtQR6oPpNTyE2uCakAvsaBtqYiv--ucEmB-TgqkZD42N4ta9GWPhzSIZ6pCTDvas8I0yvwyA__",
    name: "SunnySlope Suites",
    location: "Denver, CO",
    price: 250000,
  },
  {
    id: 6,
    image:
      "https://s3-alpha-sig.figma.com/img/e1fe/9540/4a524ce0f30f319b1b0616521eea2317?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y07hucj98k1G9jqcbvlGrpda7TWu6z3UfX6zzEYAN2j88mXvaqZwAHHnuKoDmOz27ObJfHxMhRuumqS-a1HL-LJ7xtXww7XNxGCHDlkAGC~CA9-iFtIcuMv2bZotUKOW45Vk9iudbTawyeCcY3cRhZQ45qnKS7IDRIR9YXMcNA7PAcyugs4UkimkoGZP9ld0UoKzBoy6a3d8GwGI5dTqRhGechWN-SHzgLsXLub9bnq0cJcPEnMOsDgrWwee~rb8BfUV4zgbBG7t5bgFmd3iHtVbnjRpcZbRnXaB3Rv45pCdgxM9KzuCgPTdW0cRRPkLT-L07hOTiPNObzyaG9l~Lw__",
    name: "SunnySlope Suites",
    location: "Dhaka, Bangladesh",
    price: 250000,
  },
];

const AllProperties = () => {
  return (
    <div className="my-20">
      <Container>
        <div className="flex justify-between sm:items-center mb-6 flex-col sm:flex-row">
          <h1 className="text-3xl text-[#111827] font-semibold mb-3 sm:mb-0">
            All Properties
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
          {properties.map((property) => (
            <Link key={property.id} to="/propertyDetails">
              <div className="bg-[#F9FAFB] max-w-385px">
                <div className="max-h-[200px]">
                  <img
                    className="w-full max-h-[200px]"
                    src={property.image}
                    alt={property.name}
                  />

                  <img
                    src={imageCount}
                    className="w-10 h-5 -mt-[30px] ml-2"
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center my-3">
                    <p className="bg-[#C5E2FF] text-[#00254A] text-sm px-2 py-1 rounded">
                      Apartment
                    </p>

                    <div className="flex items-center">
                      <img src={rectangle} className="w-2 h-2 mr-1 " alt="" />
                      <p className="text-[#111827]">Ready to Move</p>
                    </div>
                  </div>
                  <hr className=" bg-[#D8DCE1] text-[#D8DCE1] border-[#D8DCE1] mx-auto" />
                  <h3 className="text-xl font-semibold text-[#111827] mt-1">
                    {property.name}
                  </h3>
                  <p className="flex items-center gap-1 text-[#6B7280] font-normal mt-1">
                    <img src={location} alt="" className="size-4" />
                    {property.location}
                  </p>
                  <p className="font-semibold text-2xl mt-5">
                    ${property.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllProperties;
