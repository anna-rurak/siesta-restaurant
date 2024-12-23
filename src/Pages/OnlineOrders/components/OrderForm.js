import TypeHeader from "./TypeHeader";
import InputElement from "./InputElement";

export default function OrderForm() {
    return (
        <div className="flex flex-col gap-4">
            <TypeHeader type="Dane zamawiającego" />
            <div className="flex flex-col gap-4 px-14  my-4">
                <InputElement label="Imię i Nazwisko:" type="text" />
                <InputElement label="Ulica:" type="text" />
                <InputElement label="Numer domu:" type="text" />
                <InputElement label="Kod pocztowy:" type="text" />
                <InputElement label="Miejscowość:" type="text" />
            </div>
            <TypeHeader type="Dane kontaktowe" />
            <div className="flex flex-col gap-4 px-14 my-4">
                <InputElement
                    label="Adres email (tam znajdziesz potwierdzenie zamówienia):"
                    type="email"
                    placeholder={"pizza@gmail.com"}
                />
                <InputElement
                    label="Telefon:"
                    type="tel"
                    placeholder={"000 000 000"}
                />
            </div>
        </div>
    );
}
