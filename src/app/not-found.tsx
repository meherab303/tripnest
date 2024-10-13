import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Image
        src="https://getpublii.com/docs/media/posts/30/404-error-page.png"
        width={200}
        height={200}
        alt="not found page"
        className="w-[70%] rounded-full mt-10 mx-auto mb-10 "
      />
    </div>
  );
};

export default NotFoundPage;