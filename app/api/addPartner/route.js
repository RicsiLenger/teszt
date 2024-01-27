import { NextResponse } from "next/server";
import util from "util";
import db from "@/util/db";

const query = util.promisify(db.query).bind(db);


export const POST = async(req) => {
    const partner = await req.json();

    try {
        const results = await query(`INSERT INTO partners (uniqID, name, location, phone, description)
        VALUES (UUID(), '${partner.name}', '${partner.location}', '${partner.phone}', '${partner.description}')`)
        if (results) return new NextResponse(partner, { status: 201 });

       
    } catch (error) {
        console.log(error)
        return new NextResponse(error, { status: 400 });
    }
    finally {
        db.end();
      }
}
