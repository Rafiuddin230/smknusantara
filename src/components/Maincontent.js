import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from "./../assets/TKJ.png";
import jurusan2 from "./../assets/TKR.png";
import jurusan3 from "./../assets/TSM.png";
import kegiatan1 from "./../assets/Kegiatan (1).png";
import kegiatan2 from "./../assets/Kegiatan (2).png";
import kegiatan3 from "./../assets/Kegiatan (3).png";
import kegiatan4 from "./../assets/Kegiatan (4).png";

const Maincontent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row fw-bold">
          <div className="col-12 text-center my-5">
            <h1>Jurusan Sekolah</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-12 mt-5 mt-lg-0">
            <Cardjurusan
              image={jurusan1}
              jurusan="Teknik Komputer Jaringan"
              deskripsi="Jurusan TKJ mempersiapkan siswa menjadi ahli di bidang teknologi komputer, jaringan, dan sistem informasi untuk berkarir di industri IT."
            />
          </div>
          <div className="col-lg-4 col-12 mt-5 mt-lg-0">
            <Cardjurusan
              image={jurusan2}
              jurusan="Teknik Kendaraan Ringan"
              deskripsi="Jurusan Teknik Kendaraan Ringan (TKR) adalah program pendidikan yang mengajarkan siswa tentang berbagai aspek kendaraan mobil"
            />
          </div>
          <div className="col-lg-4 col-12 mt-5 mt-lg-0">
            <Cardjurusan
              image={jurusan3}
              jurusan="Teknik Sepeda Motor"
              deskripsi="Jurusan Teknik Sepeda Motor (TSM) adalah program pendidikan yang bertujuan untuk melatih siswa dalam menguasai pengetahuan dan keterampilan mengelola sepeda motor."
            />
          </div>
        </div>

        <div className="row fw-bold">
          <div className="col-12 text-center my-5">
            <h1>Kegiatan</h1>
          </div>
        </div>

        <div className="row text-center text-bold fw-bold">
          <div className="col-12 my-3">
            <Cardkegiatan image={kegiatan1} deskripsi="Kegiatan Pramuka" />
          </div>

          <div className="col-12 my-3">
            <Cardkegiatan image={kegiatan2} deskripsi="Kegiatan Pencak Silat" />
          </div>

          <div className="col-12 my-3">
            <Cardkegiatan image={kegiatan3} deskripsi="Kegiatan Olahraga" />
          </div>

          <div className="col-12 my-3">
            <Cardkegiatan image={kegiatan4} deskripsi="Kegiatan Bola Basket" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
