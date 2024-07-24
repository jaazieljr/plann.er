import { Link2, Plus } from "lucide-react";






export function ImportantLinks() {

  
  return(
    <div className = 'space-y-6' >
    <h2 className='font-semibold text-xl'>Links importantes</h2>

    <div className='space-y-5'>
      <div className='flex items-center justify-between gap-4'>
        <div className='space-y-1.5'>
          <span className='block font-medium text-zinc-100'>Reserva do AirBnB</span>
          <a href="#" className=' hover:text-zinc-400 block text-xs text-zinc-400 truncate'>https://www.airbnb.com.br/s/Guaraciaba-do-Norte-~-CE/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-08-01&monthly_length=3&monthly_end_date=2024-11-01&price_filter_input_type=0&channel=EXPLORE&query=Guaraciaba%20do%20Norte%20-%20CE&place_id=ChIJoycGohrzlAcRZVQWxAheYds&date_picker_type=calendar&checkin=2024-09-10&checkout=2024-09-20&adults=1&source=structured_search_input_header&search_type=filter_change&search_mode=regular_search&price_filter_num_nights=1</a>

        </div>
        <Link2 className='text-zinc-400 size-5 shrink-0' />
      </div>

    </div>

    <div className='space-y-5'>
      <div className='flex items-center justify-between gap-4'>
        <div className='space-y-1.5'>
          <span className='block font-medium text-zinc-100'>TripAdvisior</span>
          <a href="#" className=' hover:text-zinc-400 block text-xs text-zinc-400 truncate'>https://www.tripadvisor.co.uk/Search?q=guaraciaba+do+norte&geo=186338&ssrc=a&searchNearby=false&searchSessionId=000d9b858b42697a.ssid&blockRedirect=true&offset=0</a>

        </div>
        <Link2 className='text-zinc-400 size-5 shrink-0' />
      </div>

    </div>




    <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
      <Plus className="size-5" />
      Cadatrar novo link

    </button>

  </div>
  )
}