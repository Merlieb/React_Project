// import React form "react";

// class Messages extends React.Component{
// //     render(){
// //         return (
// // <div id="kognitiv-widget" class="form-component hotel" data-code="1" data-component="Hotel">
// // <div class="kognitiv-widget-main-wrap">
// // <div class="kognitiv-widget-wrap kw-full">
// // <div class="tabs-main-wrap">
// // <div class="kv-tabs-content-wrapper">
// // <div class="kv-tab-content kv-tab-active">
// // <div class="kognitiv-widget-tabs-item">
// // <div>
// // <form class="kw-widget" action="">
// // <div class="kw-module kw-hotel-selection-wrapper">
// // <label for="" class="kw-input-label">Hotel</label>
// // <select name="hotel" class="">
// // <option value="" text="All hotels">All hotels</option>
// // <optgroup label="Isla de San Andrés, Colombia">
// // <option text="Decameron Aquarium" value="S003267">Decameron Aquarium</option>
// // <option text="Decameron Isleno" value="S003272">Decameron Isleno</option>
// // <option text="Decameron Los Delfines" value="S003275">Decameron Los Delfines</option>
// // <option text="Decameron Marazul" value="S003292">Decameron Marazul</option>
// // <option text="Decameron Maryland" value="S003276">Decameron Maryland</option>
// // <option text="Decameron San Luis" value="S003278">Decameron San Luis</option>
// // </optgroup>
// // <optgroup label="Quimbaya, Quindio, Colombia">
// // <option text="Decameron Las Heliconias" value="S003273">Decameron Las Heliconias</option>
// // <option text="Decameron Panaca" value="S003277">Decameron Panaca</option>
// // </optgroup>
// // <optgroup label="Santa Marta, Magdalena, Colombia">
// // <option text="Decameron Galeon" value="S003270">Decameron Galeon</option>
// // </optgroup>
// // <optgroup label="Leticia, Amazonas, Colombia">
// // <option text="Decameron Ticuna" value="S003279">Decameron Ticuna</option>
// // </optgroup><optgroup label="Cartagena, Bolivar, Colombia">
// // <option text="Decameron Cartagena" value="S003269">Decameron Cartagena</option>
// // </optgroup>
// // <optgroup label="Isla de Barú, Bolivar, Colombia">
// // <option text="Decameron Baru" value="S003268">Decameron Baru</option>
// // </optgroup>
// // <optgroup label="Mompiche, Esmeraldas, Ecuador">
// // <option text="Royal Decameron Mompiche" value="S003286">Royal Decameron Mompiche</option>
// // </optgroup>
// // <optgroup label="Santa Elena, Santa Elena, Ecuador">
// // <option text="Royal Decameron Punta Centinela" value="S003288">Royal Decameron Punta Centinela</option>
// // </optgroup>
// // <optgroup label="Acajutla, Sonsonate, El Salvador">
// // <option text="Royal Decameron Salinitas" value="S003290">Royal Decameron Salinitas</option>
// // </optgroup>
// // <optgroup label="Costa Arcadins, Montrouis, Haiti">
// // <option text="Royal Decameron Indigo Beach Resort &amp; Spa" value="S003284">Royal Decameron Indigo Beach Resort &amp; Spa</option>
// // </optgroup>
// // <optgroup label="Montego Bay, Saint james, Jamaica">
// // <option text="Royal Decameron Cornwall Beach" value="S003283">Royal Decameron Cornwall Beach</option>
// // <option text="Royal Decameron Montego Beach" value="S003287">Royal Decameron Montego Beach</option>
// // </optgroup>
// // <optgroup label="Runaway Bay, Saint Ann, Jamaica">
// // <option text="Royal Decameron Club Caribbean" value="S003281">Royal Decameron Club Caribbean</option>
// // </optgroup>
// // <optgroup label="San José del Cabo, Baja California, Mexico">
// // <option text="Royal Decameron Los Cabos" value="S003285">Royal Decameron Los Cabos</option>
// // </optgroup>
// // <optgroup label="Rincón de Guayabitos, Nayarit, Mexico">
// // <option text="Decameron Los Cocos" value="S003274">Decameron Los Cocos</option>
// // </optgroup>
// // <optgroup label="Bucerías, Nayarit, Mexico">
// // <option text="Royal Decameron Complex" value="S003282">Royal Decameron Complex</option>
// // </optgroup>
// // <optgroup label="Santa Clara, Lima, Peru">
// // <option text="Decameron El Pueblo" value="S003280">Decameron El Pueblo</option>
// // </optgroup>
// // <optgroup label="Punta Sal, Tumbes, Peru">
// // <option text="Royal Decameron Punta Sal" value="S003289">Royal Decameron Punta Sal</option>
// // </optgroup><optgroup label="Rio Hato, Provincia de Cocle, Panama">
// // <option text="Royal Decameron Panamá" value="S003291">Royal Decameron Panamá</option>
// // </optgroup>
// // </select>
// // </div>
// // <div class="kw-module kw-datespicker-wrapper">
// // <label for="" class="kw-input-label">Travel dates
// //  <span class="kw-input-label-nights">(4 nights)</span>
// //  </label>
// //  <span class="datespicker-border" style="display: block;">
// //  <div class="DateRangePicker DateRangePicker_1">
// //  <div>
// //  <div class="DateRangePickerInput DateRangePickerInput_1">
// //  <div class="DateInput DateInput_1">
// //  <input type="text" class="DateInput_input DateInput_input_1" aria-label="Start Date" id="startDate" name="startDate" value="25 Jun" placeholder="Start Date" autocomplete="off" aria-describedby="DateInput__screen-reader-message-startDate">
// //  <p class="DateInput_screenReaderMessage DateInput_screenReaderMessage_1" id="DateInput__screen-reader-message-startDate">
// //  Press the down arrow key to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.</p>
// //   </div>
// //   <div class="DateRangePickerInput_arrow DateRangePickerInput_arrow_1" aria-hidden="true" role="presentation">
// //   <svg viewBox="0 0 1000 1000" class="DateRangePickerInput_arrow_svg DateRangePickerInput_arrow_svg_1">
// //   <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z"></path>
// //   </svg>
// //   </div>
// //   <div class="DateInput DateInput_1">
// //   <input type="text" class="DateInput_input DateInput_input_1" aria-label="End Date" id="endDate" name="endDate" value="29 Jun" placeholder="End Date" autocomplete="off" aria-describedby="DateInput__screen-reader-message-endDate">
// //   <p class="DateInput_screenReaderMessage DateInput_screenReaderMessage_1" id="DateInput__screen-reader-message-endDate">
// //   Press the down arrow key to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.</p>
// //   </div>
// //   </div>
// //   </div>
// //   </div>
// //   </span>
// //   </div>
// //   <div class="kw-module kw-occupancy-wrapper">
// //   <label for="" class="kw-input-label">Rooms</label>
// //   <div>
// //   <button type="button" class="kw-select-occupancy-trigger" text="1 Rooms &amp; 2 Guests">1 Rooms &amp; 2 Guests</button>
// //   <span class="bubble-border" style="display: block;">
// //   <div class="kw-occupancy-bubble " style="display: none;">
// //   <div class="kw-counter-rooms-quantity-wrap">
// //   <label class="kw-occupancy-label">Rooms</label>
// //   <div class="kognitiv-widget-counter">
// //   <span class="kw-counter-button kw-counter-button-desc">

// //   </span>
// //   <span class="kw-counter-value">1</span>
// //   <span class="kw-counter-button kw-counter-button-asc"></span>
// //   </div>
// //   </div>
// //   <div class="kw-room-occupancy-wrap">
// //   <div class="kw-occupancy-row">
// //   <label class="kw-occupancy-label">Adults</label>
// //   <div class="kognitiv-widget-counter">
// //   <span class="kw-counter-button kw-counter-button-desc">

// //   </span><span class="kw-counter-value">2</span>
// //   <span class="kw-counter-button kw-counter-button-asc">

// //   </span>
// //   </div>
// //   </div>
// //   <div class="kw-occupancy-row">
// //   <label class="kw-occupancy-label">Children</label>
// //   <div class="kognitiv-widget-counter">
// //   <span class="kw-counter-button kw-counter-button-desc">

// //   </span>
// //   <span class="kw-counter-value">0</span>
// //   <span class="kw-counter-button kw-counter-button-asc">

// //   </span>
// //   </div>
// //   </div>
// //   <div class="kw-children-ages-wrap">

// //   </div>
// //   </div>
// //   </div>
// //   </span>
// //   </div>
// //   </div>
// //   <div class="kw-module kw-promocode-wrapper">
// //   <label for="" class="kw-input-label">Promotion Code</label>
// //   <input type="text" data-lpignore="true" value="" class="kw-select-promocode">

// //   </div>
// //   <div class="kw-module kw-submit-wrapper">
// //   <button type="button" class="kw-submit-button" text="Search Now" style="display: block;">Search Now</button>
// //   </div>
// //   </form>
// //   </div>
// //   </div>
// //   </div>
// //   </div>
// //   </div>
// //   </div>
// //   </div>
// //   </div>
// //   );
// //   }
// // }
// export default Messages;