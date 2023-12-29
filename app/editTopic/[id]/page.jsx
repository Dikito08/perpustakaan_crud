import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { nama, nim, email, alamat, nohp, judul, jurusan } = topic;

  return (
    <EditTopicForm
      id={id}
      nama={nama}
      nim={nim}
      email={email}
      alamat={alamat}
      nohp={nohp}
      judul={judul}
      jurusan={jurusan}
    />
  );
}
