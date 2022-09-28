import cheerio from "cheerio";
import fs from 'fs'
import {Analyzer} from "./crawller";

interface Course {
    title: string
    count: string | number
}
console.log(1)

interface CourseResult {
    time: string,
    courseInfos: Course[]
}

interface Content {
    [propName: string]: Course[]
}

export default class CustomAnalyzer implements Analyzer {

    static instance: CustomAnalyzer
    static getInstance() {
        if(!this.instance) {
            this.instance = new CustomAnalyzer()
        }
        return this.instance
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
    private generateJsonContent(courseResult: CourseResult, filePath: string) {
        let fileContent: Content = {}
        if (fs.existsSync(filePath)) {
            fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        }
        fileContent[courseResult.time] = courseResult.courseInfos
        return fileContent
    }

    // 把分析器返回出去给爬虫调用
    public analyze(html: string, filePath: string) {
        const courseResult = this.getCourseInfo(html)
        console.log(courseResult, 'courseResult')
        const fileContent = this.generateJsonContent(courseResult, filePath)
        return JSON.stringify(fileContent)
    }
    private constructor() {}
}
