import { Request, Response, NextFunction } from "express";
import logger from "@logger";

const log = logger("middleware:auth")

/**
 * For this to work the cookies must exist and be populated with the correct data
 *
 * TODO this wont work until Adrian's auth backend's url wont be set
 * @param req
 * @param res
 * @param next
 * @cookies access_token, refresh_token
 */
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    log.silly('Checking auth')
    const access_token = req.cookies.access_token;
    const refresh_token = req.cookies.refresh_token;
    log.silly(access_token)
    log.silly(refresh_token)

    if (!access_token || !refresh_token) {
      res.sendStatus(401)
      log.error('access_token and refresh_token cookies do not exist')
      next(' ')
      return
    }

    // TODO add adrians backend
    fetch(process.env.AUTH_BACKEND + '/verify', {
      credentials: 'same-origin'
    }).then(value => {
      if (value.status !== 200) {
        res.sendStatus(401)
        log.error(`Bad token:`, value.text())
        next(' ')
      }
      next()
    }).catch(reason => {
      log.error('Failed to fetch:', reason)
      next(' ')
    })
  } catch (e) {
    res.sendStatus(401)
    log.error('Bad token', e)
    next(' ')
  }
};

export default authMiddleware;