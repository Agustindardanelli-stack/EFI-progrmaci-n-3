import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

export const Materias = () => {
  const listadoMaterias = ["Matematica", "Ingles", "redes"];
  return (
    <section>
      <Layout>
        <Head>
          <title>Materias</title>
          <meta name="description" content="Pagina de Materias"></meta>
          <link rel="icon" href="/logoitec.ico" />
        </Head>

        <h1 className="text-center text-4xl font-bold text-gray-700 py-6 underline underline-offset-2">
          Materias
        </h1>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-black mb-14 mt-">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Materia
                </th>
                <th scope="col" className="py-3 px-6">
                  Año
                </th>
                <th scope="col" className="py-3 px-6">
                  Docente
                </th>
                <th scope="col" className="py-3 px-6">
                  Código
                </th>
                <th scope="col" className="py-3 px-6">
                  Correlativas
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Matematica y Logica
                </th>
                <td className="py-4 px-6">1.ero</td>
                <td className="py-4 px-6">Pablo Bunader</td>
                <td className="py-4 px-6">1</td>
                <td className="py-4 px-6">-</td>
              </tr>
              <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Sistemas y Organizaciones
                </th>
                <td className="py-4 px-6">1.ero</td>
                <td className="py-4 px-6">Muñoz Maria Jose</td>
                <td className="py-4 px-6">2</td>
                <td className="py-4 px-6">-</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Arquitectura de las Computadoras
                </th>
                <td className="py-4 px-6">1.ero</td>
                <td className="py-4 px-6">Sosa Jorge</td>
                <td className="py-4 px-6">3</td>
                <td className="py-4 px-6">-</td>
              </tr>
              <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Programación 1
                </th>
                <td className="py-4 px-6">1.ero</td>
                <td className="py-4 px-6">Kaniefsky Pablo</td>
                <td className="py-4 px-6">4</td>
                <td className="py-4 px-6">-</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Inglés
                </th>
                <td className="py-4 px-6">1.ero</td>
                <td className="py-4 px-6">Lemo Pedro</td>
                <td className="py-4 px-6">5</td>
                <td className="py-4 px-6">-</td>
              </tr>
              <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Lengua y Comunicación
                </th>
                <td className="py-4 px-6">1.ero</td>
                <td className="py-4 px-6">Pomini Ariadna</td>
                <td className="py-4 px-6">6</td>
                <td className="py-4 px-6">-</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Matematica y Logica
                </th>
                <td className="py-4 px-6">1.ero</td>
                <td className="py-4 px-6">Pablo Bunader</td>
                <td className="py-4 px-6">1</td>
                <td className="py-4 px-6">-</td>
              </tr>
              <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Sistemas y Organizaciones
                </th>
                <td className="py-4 px-6">1.ero</td>
                <td className="py-4 px-6">Muñoz Maria Jose</td>
                <td className="py-4 px-6">2</td>
                <td className="py-4 px-6">-</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Arquitectura de las Computadoras
                </th>
                <td className="py-4 px-6">1.ero</td>
                <td className="py-4 px-6">Sosa Jorge</td>
                <td className="py-4 px-6">3</td>
                <td className="py-4 px-6">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    </section>
  );
};

export default Materias;
