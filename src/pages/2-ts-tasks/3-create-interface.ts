const weather_data = {
    SPB: {
        morning: {
            temperature: 15,
            weather_type: "rain"
        },
        day: {
            temperature: 19,
            weather_type: "sunny"
        },
        evening: {
            temperature: 14,
            weather_type: "cloudy"
        }
    },
    Lappeenranta: {
        morning: {
            temperature: 17,
            weather_type: "sunny"
        },
        day: {
            temperature: 17,
            weather_type: "sunny"
        },
        evening: {
            temperature: 17,
            weather_type: "cloudy"
        }
    },
    Helsinki: {
        morning: {
            temperature: 19,
            weather_type: "cloudy"
        },
        day: {
            temperature: 19,
            weather_type: "sunny"
        },
        evening: {
            temperature: 19,
            weather_type: "cloudy"
        }
    }
}


/**
 * Задача:
 * Описать интерфейс для данных погоды
 * город (любая строка) - время дня (утро, день, вечер) - {температура (число), тип погоды - солнечно, облачно, дождь}
 */
