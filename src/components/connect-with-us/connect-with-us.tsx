import type { ReactNode } from "react";

const ConnectWithUs = (): ReactNode => {
    return (
        <section
            id="connect-with-us"
            className="w-full h-dvh
                       flex flex-col justify-center items-center
                       rounded-2xl
                       bg-neutral-800 text-center text-white"
        >
            <div
                className="space-y-6 
                            text-center font-family-[Manrope] text-white"
            >
                <button
                    id="connect-with-us-button"
                    className="border-1 border-white rounded-sm py-2 px-4"
                >
                    Members
                </button>

                <h2 className="text-5xl font-semibold">Connect With Us</h2>
                <h4>The students behind our Mission</h4>
            </div>
        </section>
    );
};

export default ConnectWithUs;
