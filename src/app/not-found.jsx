import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-green-700">404</h1>
        <h2 className="text-4xl font-semibold mt-4 mb-2">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/" className="btn bg-green-700 text-white">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
