import superagent from 'superagent'
import cheerio from 'cheerio'
import fs from 'fs'
import path from 'path'

interface Course {
    title: string
    count: string | number
}

interface CourseResult {
    time: string
    courseInfos: Course[]
}

interface Content {
    [propName: string]: Course[]
}

class Crawler {
    private url = `https://coding.imooc.com`

    // 获取html字符串
    private async getRawHtml() {
        const result = await superagent.get(this.url);
        return result.text
    }

    // 获取课程信息
    private getCourseInfo(html: string) {
        const courseInfos: Course[] = []
        const $ = cheerio.load(html)
        const courseCards = $('.course-card')
        courseCards.map((index, element) => {
            const title = $(element).data('name')
            const count = $(element)
                .find('.one')
                .find('span')
                .eq(0)
                .text()
                .split('· ')[1]
            courseInfos.push({title, count})
        })
        return {
            time: new Date().toString(),
            courseInfos
        }
    }

    // 生成json文件
    private generateJsonContent(courseResult: CourseResult) {
        const filePath = path.resolve(__dirname, '../data/course.json')
        let fileContent: Content = {}
        if(fs.existsSync(filePath)) {
            fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        }
        fileContent[courseResult.time] = courseResult.courseInfos
        return fileContent

    }

    // 初始化
    private async initSpiderProcess() {
        const filePath = path.resolve(__dirname, '../data/course.json')
        const html = await this.getRawHtml()
        const courseResult = this.getCourseInfo(html)
        const fileContent = this.generateJsonContent(courseResult)
        fs.writeFileSync(filePath, JSON.stringify(fileContent))
    }

    constructor() {
        this.initSpiderProcess()
    }
}

const crawler = new Crawler()
