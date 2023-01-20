import { SecurePassword } from "@blitzjs/auth"
import { api } from "src/blitz-server"
import db, {User} from "db"

const signup = api(async (req, res, ctx) => {
  // TODO: you can add a runtime validation (e.g. with zod) to ensure password length
  const hashedPassword = await SecurePassword.hash(req.body.password)

  const email = req.body.email
  const user = await db.user.create({
    data: { email, hashedPassword, role: "USER" },
    select: { id: true, name: true, email: true, role: true },
  })
  await ctx.session.$create({
    userId: user.id,
    role: "USER" as const,
  })
  res
    .status(200)
    .json({ userId: ctx.session.userId, ...user, email: req.query.email })
})

export default signup
