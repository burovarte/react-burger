import {format, formatDistanceToNow, isToday, isYesterday} from "date-fns";
import {ru} from "date-fns/locale";

export default function timecard (data: { createdAt: string; }) {
    let time = '';

    if (isToday(Date.parse(data.createdAt))) {
        time = 'Сегодня, ';
    } else if (isYesterday(Date.parse(data.createdAt))) {
        time = 'Вчера, ';
    } else {
        time =
            formatDistanceToNow(Date.parse(data.createdAt), {
                locale: ru,
            }) + ' назад, ';
    }
    time += format(Date.parse(data.createdAt), 'HH:mm zzz');

    return time
}