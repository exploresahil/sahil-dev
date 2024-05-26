import navItems from "@/components/projects/db";

type Props = {
  params: { websiteSection: string };
};

const page = ({ params }: Props) => {
  const slug = params.websiteSection;
  const data = navItems.filter((v: navItems) => v.slug == slug).at(0);

  //console.log("data->", data);
  //console.log("slug->", slug);

  if (!data)
    return (
      <main>
        <p>No Data</p>
      </main>
    );

  return (
    <main>
      <data.component />
    </main>
  );
};

export default page;
