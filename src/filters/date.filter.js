import Vue from 'vue'
import { format, distanceInWords } from 'date-fns'

Vue.filter('date', (dateString, dateLength) => {
    switch (dateLength.toLowerCase()) {
    case 'short':
        return format(dateString, 'MMMM D, YYYY')
        break
    case 'ago':
        return distanceInWords(new Date(), dateString, { addSuffix: true })
        break
    }
})
