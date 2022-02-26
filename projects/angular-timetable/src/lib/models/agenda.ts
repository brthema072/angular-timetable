export class Agenda {
    constructor(templateDays: TemplateDays[]){
        this.templateDays = templateDays
    }
    templateDays: TemplateDays[]
}


export class TemplateDays{
    constructor(day: string, templateHous: TemplateHours[]){
        this.day = day;
        this.templateHours = templateHous
    }
    day: string;
    templateHours: TemplateHours[]
}

export class TemplateHours{
    constructor(hour: string, scheduledHour: boolean){
        this.hour = hour;
        this.scheduledHour = scheduledHour;
    }
    hour: string;
    scheduledHour: boolean;
}