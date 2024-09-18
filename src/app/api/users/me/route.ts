import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import sendEmail from "@/helpers/mailer";
import { connectDB } from "@/db/db";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return NextResponse.json(
        {
          error: "User Not Found",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "User Found",
      secure: true,
      user: user,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
