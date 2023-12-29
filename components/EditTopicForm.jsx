"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({
  id,
  nama,
  nim,
  email,
  alamat,
  nohp,
  judul,
  jurusan,
}) {
  const [newNama, setNewNama] = useState(nama);
  const [newNim, setNewNim] = useState(nim);
  const [newEmail, setNewEmail] = useState(email);
  const [newAlamat, setNewAlamat] = useState(alamat);
  const [newNohp, setNewNohp] = useState(nohp);
  const [newJudul, setNewJudul] = useState(judul);
  const [newJurusan, setNewJurusan] = useState(jurusan);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Conten-type": "application/json",
        },
        body: JSON.stringify({
          newNama,
          newNim,
          newEmail,
          newAlamat,
          newNohp,
          newJudul,
          newJurusan,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to Update Topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
      <input
        onChange={(e) => setNewNama(e.target.value)}
        value={newNama}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Nama"
      />
      <input
        onChange={(e) => setNewNim(e.target.value)}
        value={newNim}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="NIM"
      />
      <input
        onChange={(e) => setNewEmail(e.target.value)}
        value={newEmail}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setNewAlamat(e.target.value)}
        value={newAlamat}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="alamat"
      />
      <input
        onChange={(e) => setNewNohp(e.target.value)}
        value={newNohp}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="No HP"
      />
      <input
        onChange={(e) => setNewJudul(e.target.value)}
        value={newJudul}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Judul"
      />
      <input
        onChange={(e) => setNewJurusan(e.target.value)}
        value={newJurusan}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Jurusan"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Data
      </button>
    </form>
  );
}
