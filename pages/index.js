import styles 				  from "../styles/Home.module.css";
import { useSession, signIn } from "next-auth/client";
import { useRouter } 		  from "next/router";
import { Login } 			  from "../components/icons";

export default function Home() {
	
	const [session, loading] = useSession();
	const router = useRouter();

	if (session) {
		router.push("/dashboard");
	}
	
	return (
		<div className={styles.container}>
			<div className='login-title text-2xl mb-2'>
			Proof of concept Application

			</div>
			<div className='login-title text-5xl mb-20'>
			
			FACEBOOK HELPDESK

			</div>
			
			
			<button
				onClick={() => {
					signIn("facebook");
				}}
				className='bg-primary text-white p-6 mb-10 flex space-x-6'>
				<Login className='h-6' fill='#fff' />
				<div>Facebook </div>

			</button>
			<div className='login-subtitle text-xl mb-5 text-gray-500'>
				Please Click above to continue.
			</div>
		</div>
	);
}
