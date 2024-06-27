import { useRouter } from "next/router";

const useRouterFunctions = () => {
  const router = useRouter();

  const goToHomePage = () => {
    setTimeout(() => {
      router.push("/");
    });
  };

  const goToAboutPage = () => {
    setTimeout(() => {
      router.push("/aboutPage");
    });
  };

  const goToResumePage = () => {
    setTimeout(() => {
      router.push("/resumePage");
    });
  };

  const goToBlogPage = () => {
    setTimeout(() => {
      router.push("/blogPage");
    });
  };

  return { goToHomePage, goToAboutPage, goToResumePage, goToBlogPage };
};

export { useRouterFunctions };
