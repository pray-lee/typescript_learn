import superagent from 'superagent'
import path from 'path'
import fs from 'fs'
import CustomAnalyzer from "./customAnalyzer";


export interface Analyzer {
   analyze: (html: string, filePath: string) => string
}

class Crawler {
    private filePath = path.resolve(__dirname, '../data/course.json')

    // 获取html字符串
    private async getRawHtml() {
        const result = await superagent.get(this.url);
        return result.text
    }

    private writeFile(content: string) {
        fs.writeFileSync(this.filePath, content)
    }

    // 初始化
    private async initSpiderProcess() {
        const html = await this.getRawHtml()
        const fileContent = this.analyzer.analyze(html, this.filePath)
        this.writeFile(JSON.stringify(fileContent))
    }

    constructor(private analyzer: Analyzer, private url: string) {
        this.initSpiderProcess()
    }
}

const url = `https://coding.imooc.com`
const analyzer = CustomAnalyzer.getInstance()
new Crawler(analyzer, url)
