import { Injectable } from '@angular/core'
import { IpcRenderer } from 'electron'
import { Font } from './font.interface'

@Injectable({
  providedIn: 'root'
})
export class FontService {
  private ipc: IpcRenderer

  constructor() {
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer
      } catch (error) {
        throw error
      }
    } else {
      console.warn('Could not load electron ipc')
    }
  }

  async getFonts() {
    return new Promise<Font[]>((resolve, _reject) => {
      this.ipc.once('getFontsResponse', (_event, arg) => {
        const fonts = this.formatFonts(arg)
        resolve(fonts)
      })
      this.ipc.invoke('getFonts')
    })
  }

  private formatFonts(rawFonts: string[]): Font[] {
    const formatted: Font[] = []

    for (const font of rawFonts) {
      const fn: Font = {
        class: font.toLowerCase().replace(/\s/g, '-'),
        name: font
      }
      formatted.push(fn)
    }

    return formatted
  }
}
