import { auth } from "@/auth.config";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { redirect } from "next/navigation";

export const ProfilePage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect('/admin/login');
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-5">User Profile</h1>

      <section className="md:grid md:grid-cols-[96px_1fr] md:gap-5">
        { (session?.user.image) ? (
          <figure className="flex justify-center mb-5 md:block">
            <Image
              src={session.user.image as string}
              alt={session.user.name}
              width={96}
              height={96}
              className="size-[96px] rounded border border-gray-400"
            />
          </figure>
        ) : (
          <figure className="border border-gray-400 rounded p-2 box-content">
            <FaUser size={80} className="text-gray-400" />
          </figure>
        )}
        <table className="w-full">
          <tbody>
            <tr className="border-b border-gray-400">
              <th className="text-left p-1 w-[150px]">Name</th>
              <td className="text-left p-1">{session?.user.name}</td>
            </tr>
            <tr className="border-b border-gray-400">
              <th className="text-left p-1 w-[150px]">Email</th>
              <td className="text-left p-1">{session?.user.email}</td>
            </tr>
            <tr className="border-b border-gray-400">
              <th className="text-left p-1 w-[150px]">Roles</th>
              <td className="text-left p-1 inline-flex gap-2">
                {session?.user.roles?.map((role) => (
                  <div
                    key={role}
                    className="bg-gray-800 text-gray-200 px-2 py-1 rounded"
                  >{role}</div>
                ))}
              </td>
            </tr>
            <tr>
              <th className="text-left p-1 w-[150px]">Is Active</th>
              <td className="text-left p-1 inline-flex gap-2">
                {session.user.isActive ? 'Yes' : 'No'}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ProfilePage;