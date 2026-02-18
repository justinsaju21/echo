import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #09090b 0%, #0a0a1a 50%, #09090b 100%)",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Blue glow */}
                <div
                    style={{
                        position: "absolute",
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                />

                <div
                    style={{
                        fontSize: 120,
                        fontWeight: 900,
                        color: "white",
                        letterSpacing: "-6px",
                        textTransform: "uppercase",
                        lineHeight: 1,
                        marginBottom: 16,
                    }}
                >
                    ECHO
                </div>

                <div
                    style={{
                        fontSize: 24,
                        color: "#71717a",
                        letterSpacing: "6px",
                        textTransform: "uppercase",
                        marginBottom: 40,
                    }}
                >
                    ECE Council for Hosting & Operations
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "12px 28px",
                        borderRadius: 999,
                        background: "rgba(59,130,246,0.1)",
                        border: "1px solid rgba(59,130,246,0.3)",
                    }}
                >
                    <div
                        style={{
                            fontSize: 18,
                            color: "#3B82F6",
                            fontWeight: 700,
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                        }}
                    >
                        Join the Technical Team
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
