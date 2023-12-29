"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nohp, setNohp] = useState("");
  const [judul, setJudul] = useState("");
  const [jurusan, setJurusan] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nama || !nim || !email || !alamat || !nohp || !judul || !jurusan) {
      alert("Anda perlu mengisi semua form");
      return;
    }

    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nama,
          nim,
          email,
          alamat,
          nohp,
          judul,
          jurusan,
        }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to Create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
      <input
        onChange={(e) => setNama(e.target.value)}
        value={nama}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Nama"
      />
      <input
        onChange={(e) => setNim(e.target.value)}
        value={nim}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="NIM"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setAlamat(e.target.value)}
        value={alamat}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="alamat"
      />
      <input
        onChange={(e) => setNohp(e.target.value)}
        value={nohp}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="No HP"
      />
      <input
        onChange={(e) => setJudul(e.target.value)}
        value={judul}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Judul"
      />
      <input
        onChange={(e) => setJurusan(e.target.value)}
        value={jurusan}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Jurusan"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Pinjam Buku
      </button>
    </form>
  );
}
