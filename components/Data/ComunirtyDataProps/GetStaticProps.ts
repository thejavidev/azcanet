import FetchData from "@/helpers/FetchData";
import { useParams } from "next/navigation";

export function getStaticProps() {
  try {
    const products: any = FetchData(["comunity", "navbar_colors"]);
    const color = products?.navbar_colors?.section_bg;
    const { slug } = useParams<any>();
    const currentPost = products?.comunity?.find(
      (post: any) => post?.slug_en === slug
    );
    return {
      props: {
        currentPost,
        color,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {},
    };
  }
}
